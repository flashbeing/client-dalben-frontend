<template>
  <div class="text-input" :class="{ disabled }">
    <input
      ref="input"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      :disabled="disabled"
      @keypress="keypress($event)"
      @input="updateValue($event.target.value)"
      @blur="onBlur($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return [
          'text',
          'number',
          'tel',
          'email',
          'search',
          'password',
          'hidden',
        ].includes(value)
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    updateValue(value) {
      this.$emit('input', value)
    },

    focus() {
      this.$refs.input.focus()
    },

    keypress(event) {
      switch (event.keyCode) {
        case 13:
          this.$emit('onEnter')
          break
      }
    },

    onBlur(value) {
      this.$emit('blur', value)
    },
  },
}
</script>

<style lang="postcss" scoped>
.text-input {
  & input {
    @apply text-base px-5 bg-input resize-none w-full font-semibold text-black rounded-md;

    padding-top: 13px;
    padding-bottom: 13px;

    &:focus {
      @apply outline-none bg-input-focus;
    }
  }

  &.disabled {
    @apply pointer-events-none opacity-25;
  }
}
</style>

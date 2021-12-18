<template>
  <div class="textarea" :class="{ disabled }">
    <textarea
      ref="input"
      :placeholder="placeholder"
      :value="value"
      :disabled="disabled"
      @keypress="keypress($event)"
      @input="updateValue($event.target.value)"
      @blur="onBlur($event.target.value)"
    ></textarea>
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
.textarea {
  & textarea {
    @apply text-base py-3 px-5 bg-input resize-none w-full font-semibold align-top text-black rounded-md;

    min-height: 200px;

    &:focus {
      @apply outline-none bg-input-focus;
    }
  }

  &.disabled {
    @apply pointer-events-none opacity-25;
  }
}
</style>

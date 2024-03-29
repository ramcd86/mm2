<template>
  <div
    class="apos-primary-scrollbar apos-context-menu__dialog"
    :class="classes"
    role="dialog"
  >
    <AposContextMenuTip
      v-if="hasTip"
      :align="tipAlignment"
      :origin="menuOrigin"
      x-placement="bottom"
    />
    <div class="apos-context-menu__pane">
      <slot>
        <ul v-if="menu" class="apos-context-menu__items" role="menu">
          <AposContextMenuItem
            v-for="item in menu"
            :key="item.action"
            :data-apos-test-context-menu-item="item.action"
            :menu-item="item"
            @clicked="menuItemClicked"
            :open="isOpen"
          />
        </ul>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AposContextMenuDialog",
  props: {
    menuPlacement: {
      type: String,
      required: true,
    },
    menu: {
      type: Array,
      default: null,
    },
    classList: {
      type: String,
      default: "",
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
    modifiers: {
      type: Array,
      default() {
        return [];
      },
    },
    hasTip: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["item-clicked"],
  data() {
    return {};
  },
  computed: {
    menuPositions() {
      return this.menuPlacement.split("-");
    },
    menuOrigin() {
      return this.menuPositions[0];
    },
    tipAlignment() {
      if (!this.menuPositions[1]) {
        return "center";
      } else {
        return this.menuPositions[1];
      }
    },
    classes() {
      const classes = this.classList.split(" ");
      this.modifiers.forEach((c) => {
        classes.push(`apos-context-menu__dialog--${c}`);
      });
      return classes.join(" ");
    },
  },
  methods: {
    menuItemClicked(action) {
      this.$emit("item-clicked", action);
    },
  },
};
</script>

<style lang="scss">
.apos-context-menu__dialog--unpadded > .apos-context-menu__pane {
  padding: 0;
}

.apos-context-menu__dialog--tb-padded > .apos-context-menu__pane {
  padding-top: 20px;
  padding-bottom: 20px;
}

.apos-context-menu__dialog {
  display: inline-block;
  color: var(--a-text-primary);
  transition: scale 0.15s ease, translatey 0.15s ease;
}

.apos-context-menu__inner {
  border-radius: var(--a-border-radius);
  box-shadow: var(--a-box-shadow);
  background-color: var(--a-background-primary);
  border: 1px solid var(--a-base-8);
}

.apos-context-menu__pane {
  @include type-base;
  padding: 20px;
  border: 1px solid var(--a-base-8);
  border-radius: var(--a-border-radius);
  box-shadow: var(--a-box-shadow);
  background-color: var(--a-background-primary);
}

.apos-context-menu__items {
  @include apos-list-reset();
  display: inline-block;
  list-style-type: none;
  width: max-content;
  margin: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding: 10px 0;
}

.apos-context-menu__dialog ::v-deep .apos-schema .apos-field {
  margin-bottom: 20px;
  .apos-field__help {
    margin-top: 5px;
  }
}
</style>

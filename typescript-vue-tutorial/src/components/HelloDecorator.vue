
<template>
  <div>
    <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>

<script lang="ts">
// 注意 script 标签的 lang 属性值为 ts。
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class HelloDecorator extends Vue {
  @Prop() name!: string
  @Prop() initialEnthusiasm!: number
  enthusiasm = this.initialEnthusiasm
  increment() {
    this.enthusiasm++;
  }
  decrement() {
    if (this.enthusiasm > 1) {
      this.enthusiasm--;
    }
  }
  get exclamationMarks(): string {
    return Array(this.enthusiasm + 1).join('!')
  }
}
</script>

<style>
.greeting {
  font-size: 20px;
  color: red;
}
</style>
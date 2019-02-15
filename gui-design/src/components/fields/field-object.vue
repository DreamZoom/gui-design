<template>
    <div>
        <slot :model="value"></slot>
    </div>
</template>

<script>
    export default {
        props: {
            value: Object
        },
        mounted() {
            if (!this.value) {
                this.value = {};
                this.$emit("input", this.value);
            }
        }
    }
</script>


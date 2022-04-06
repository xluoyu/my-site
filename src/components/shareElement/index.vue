<script setup lang="ts">
const slot = useSlots()
const renderComponent = slot.default
console.log(slot)
</script>

<style scoped>

</style>

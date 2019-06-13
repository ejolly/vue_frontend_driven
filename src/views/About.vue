<template>
  <div class="columns">
    <div class="column">
      <p class="notification is-primary">First column</p>
      <div class="columns is-mobile">
        <div class="column">
          <span class="icon is-medium">
            <i class="fas fa-spinner fa-pulse"></i>
          </span>
        </div>
        <div class="column">
          <p class="notification is-info">Second nested column</p>
        </div>
      </div>
    </div>
    <div class="column">
      <p class="notification is-danger">Second column</p>
      <div class="columns is-mobile">
        <div class="column is-half">
          <p class="notification is-danger">50%</p>
        </div>
        <div class="column">
          <p class="notification is-danger">Auto</p>
        </div>
        <div class="column">
          <p class="notification is-danger">Auto</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

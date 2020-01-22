<template>
  <div id="screenings-component">
    <ul>
      <li
      v-for="(date, i) in dates"
      :key="i + date">
        <div>{{ date }}</div>
        <ul>
          <li
          v-for="(screening, i) in screenings(date)"
          :key="i + screening">
            <span>{{ screening.time }}</span>
            <span>{{ screening.auditorium }}</span>
            <span>Platser kvar</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
<template>
  <div class="container">
    <div class="tabs">
      <input type="radio" id="radio-1" name="tabs" checked />
      <label class="tab" for="radio-1">Upcoming<span class="notification">2</span></label>
      <input type="radio" id="radio-2" name="tabs" />
      <label class="tab" for="radio-2">Development</label>
      <input type="radio" id="radio-3" name="tabs" />
      <label class="tab" for="radio-3">Completed</label>
      <span class="glider"></span>
    </div>
  </div>
</template>
<style scoped>
.container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tabs {
  display: flex;
  position: relative;
  background-color: #e8e2e2;
  box-shadow: 0 0 1px 0 rgba(24, 94, 224, 0.15), 0 6px 12px 0 rgba(24, 94, 224, 0.15);
  padding: 0.75rem;
  border-radius: 99px;
}
.tabs * {
  z-index: 2;
}

input[type="radio"] {
  display: none;
}

.tab {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  width: 200px;
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 99px;
  cursor: pointer;
  transition: color 0.15s ease-in;
}

.notification {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin-left: 0.75rem;
  border-radius: 50%;
  background-color: #e6eef9;
  transition: 0.15s ease-in;
}

input[type="radio"]:checked + label {
  color: #185ee0;
}
input[type="radio"]:checked + label > .notification {
  background-color: #185ee0;
  color: #fff;
}

input[id="radio-1"]:checked ~ .glider {
  transform: translateX(0);
}

input[id="radio-2"]:checked ~ .glider {
  transform: translateX(100%);
}

input[id="radio-3"]:checked ~ .glider {
  transform: translateX(200%);
}

.glider {
  position: absolute;
  display: flex;
  height: 54px;
  width: 200px;
  background-color: #e6eef9;
  z-index: 1;
  border-radius: 99px;
  transition: 0.25s ease-out;
}

@media (max-width: 700px) {
  .tabs {
    transform: scale(0.6);
  }
}
</style>

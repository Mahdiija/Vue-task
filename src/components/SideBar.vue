

<template>
  <div
    class="bg-white rounded-tl-3xl rounded-bl-3xl w-[17%] h-full flex flex-col justify-between gap-12 dark:bg-black"
  >
    <div>
      <div class="flex gap-1 items-center py-6 px-7">
        <div>
          <img class="w-7 h-7" src="../assets/AvoCado.png" alt="" />
        </div>
        <p class="font-bold dark:text-white">AvoBurger</p>
      </div>
      <div class="flex flex-col py-10">
        <router-link active-class="active" to="/">
          <div
            class="flex items-center gap-3 py-4 px-8 cursor-pointer hover:bg-green-100"
          >
            <div>
              <svg
                class="mt-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  x="4"
                  y="2"
                  width="5"
                  height="5"
                  rx="1"
                  stroke="#33363F"
                  stroke-width="3"
                  fill="#33363F"
                  stroke-linecap="round"
                />
                <rect
                  x="4"
                  y="13"
                  width="5"
                  height="5"
                  rx="1"
                  stroke="#33363F"
                  stroke-width="3"
                  fill="#33363F"
                  stroke-linecap="round"
                />
                <rect
                  x="14"
                  y="2"
                  width="5"
                  height="5"
                  rx="1"
                  stroke="#33363F"
                  stroke-width="3"
                  fill="#33363F"
                  stroke-linecap="round"
                />
                <rect
                  x="14"
                  y="13"
                  width="5"
                  height="5"
                  rx="1"
                  stroke="#33363F"
                  stroke-width="3"
                  fill="#33363F"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <p class="font-semibold dark:text-white">Dashboard</p>
          </div></router-link
        >

        <router-link active-class="active" to="/orders">
          <div
            class="flex items-center gap-3 py-4 px-8 cursor-pointer hover:bg-green-100"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 8L8 7C8 4.79086 9.79086 3 12 3V3C14.2091 3 16 4.79086 16 7L16 8"
                  stroke="#222222"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.58579 7.58579C3 8.17157 3 9.11438 3 11V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V11C21 9.11438 21 8.17157 20.4142 7.58579C19.8284 7 18.8856 7 17 7H7C5.11438 7 4.17157 7 3.58579 7.58579ZM10 12C10 11.4477 9.55228 11 9 11C8.44772 11 8 11.4477 8 12V14C8 14.5523 8.44772 15 9 15C9.55228 15 10 14.5523 10 14V12ZM16 12C16 11.4477 15.5523 11 15 11C14.4477 11 14 11.4477 14 12V14C14 14.5523 14.4477 15 15 15C15.5523 15 16 14.5523 16 14V12Z"
                  fill="#222222"
                />
              </svg>
            </div>
            <p class="font-semibold dark:text-white">Orders</p>
          </div></router-link
        >

        <router-link active-class="active" to="/products"
          ><div
            class="flex items-center gap-3 py-4 px-8 cursor-pointer hover:bg-green-100"
          >
            <div>
              <svg
                fill="#000000"
                height="24px"
                width="24px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 300.307 300.307"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <g>
                      <path
                        d="M86.454,272.931h127.4c27.917,0,51.361-19.446,57.542-45.5H28.912C35.093,253.485,58.538,272.931,86.454,272.931z"
                      />
                      <path
                        d="M299.602,123.035c-2.383-7.153-10.113-11.016-17.265-8.633c-3.2,1.067-6.068,2.023-9.54,2.714
				c-1.775-24.079-14.806-46.296-37.154-63.06c-22.938-17.204-53.26-26.679-85.379-26.679c-32.129,0-62.485,9.471-85.476,26.669
				c-22.422,16.773-35.493,38.993-37.274,63.072c-3.473-0.693-6.343-1.648-9.544-2.715c-7.151-2.383-14.882,1.482-17.266,8.633
				c-2.383,7.151,1.482,14.882,8.633,17.266c4.909,1.636,10.266,3.412,17.959,4.423l13.659,0.827
				c11.433,0,16.529-1.699,22.981-3.849c7.383-2.461,15.752-5.251,31.617-5.251h0.001h0.001c15.864,0,24.232,2.789,31.614,5.251
				c6.453,2.15,11.549,3.849,22.986,3.849c11.432,0,16.528-1.699,22.979-3.849c7.384-2.461,15.753-5.251,31.619-5.251h0.001h0.001
				c15.866,0,24.234,2.789,31.617,5.251c6.453,2.15,11.549,3.849,22.983,3.849l13.655-0.826c7.694-1.011,13.052-2.787,17.96-4.424
				C298.122,137.917,301.988,130.187,299.602,123.035z"
                      />
                      <path
                        d="M277.976,172.852h-18.62c-15.864,0-24.232-2.789-31.615-5.251c-6.453-2.15-11.549-3.849-22.985-3.849h-0.001h-0.001
				c-11.436,0-16.533,1.699-22.986,3.849c-7.382,2.462-15.75,5.251-31.612,5.251c-15.867,0-24.235-2.789-31.618-5.251
				c-6.453-2.15-11.549-3.849-22.983-3.849c-11.435,0-16.532,1.699-22.985,3.849c-7.383,2.462-15.751,5.251-31.614,5.251H22.332
				c-7.341,0.226-13.228,6.234-13.228,13.629c0,7.538,6.112,13.65,13.65,13.65h4.55h245.7h4.55c7.538,0,13.65-6.112,13.65-13.65
				C291.204,179.085,285.317,173.077,277.976,172.852z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <p class="font-semibold dark:text-white">Products</p>
          </div></router-link
        >

        <router-link active-class="active" to="/restaurants"
          ><div
            class="flex items-center gap-3 py-4 px-8 cursor-pointer hover:bg-green-100"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.398 19.804C13.881 19.0348 19 16.0163 19 11C19 7.13401 15.866 4 12 4C8.13401 4 5 7.13401 5 11C5 16.0163 10.119 19.0348 11.602 19.804C11.8548 19.9351 12.1452 19.9351 12.398 19.804ZM12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
                  fill="#222222"
                />
              </svg>
            </div>
            <p class="font-semibold dark:text-white">Restaurants</p>
          </div></router-link
        >
        <router-link active-class="active" to="/drivers"
          ><div
            class="flex items-center gap-3 py-4 px-8 cursor-pointer hover:bg-green-100"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="8" r="4" fill="#222222" />
                <path
                  d="M5.33788 17.3206C5.99897 14.5269 8.77173 13 11.6426 13H12.3574C15.2283 13 18.001 14.5269 18.6621 17.3206C18.79 17.8611 18.8917 18.4268 18.9489 19.0016C19.0036 19.5512 18.5523 20 18 20H6C5.44772 20 4.99642 19.5512 5.0511 19.0016C5.1083 18.4268 5.20997 17.8611 5.33788 17.3206Z"
                  fill="#222222"
                />
              </svg>
            </div>
            <p class="font-semibold dark:text-white">Drivers</p>
          </div></router-link
        >
      </div>
    </div>

    <div>
      <div class="mx-auto w-[80%] flex flex-col gap-2">
        <div class="flex justify-center">
          <button
            @click="toggleDarkMode"
            class="p-2 rounded-lg focus:outline-none"
            :class="
              isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
            "
          >
            <img
              :src="isDarkMode ? '../assets/moon.svg' : '../assets/sun.svg'"
              alt=""
            />

            {{ isDarkMode ? "Light Mode" : "Dark Mode" }}
          </button>
        </div>
        <div class="flex justify-center dark:text-white">
          <p>Done for the day?</p>
        </div>
        <div
          class="py-2 px-2 flex justify-center items-center gap-1 back rounded-lg cursor-pointer"
        >
          <div>
            <svg
              class="mt-0.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill="#fff"
                d="M6.99811 10.2467L7.43298 11.0077C7.70983 11.4922 7.84825 11.7344 7.84825 12C7.84825 12.2656 7.70983 12.5078 7.43299 12.9923L7.43298 12.9923L6.99811 13.7533C5.75981 15.9203 5.14066 17.0039 5.62348 17.5412C6.1063 18.0785 7.24961 17.5783 9.53623 16.5779L15.8119 13.8323C17.6074 13.0468 18.5051 12.654 18.5051 12C18.5051 11.346 17.6074 10.9532 15.8119 10.1677L9.53624 7.4221C7.24962 6.42171 6.1063 5.92151 5.62348 6.45883C5.14066 6.99615 5.75981 8.07966 6.99811 10.2467Z"
                stroke="#fff"
              />
            </svg>
          </div>
          <p class="text-white">Send daily report</p>
        </div>
      </div>
      <div class="w-[85%] mx-auto h-[1px] bg-slate-200 mt-4"></div>
      <div class="flex items-center gap-5 py-4 justify-center">
        <div>
          <div>
            <img
              class="rounded-full object-cover w-10 h-10"
              src="../assets/User.jfif"
              alt=""
            />
          </div>
        </div>
        <div>
          <p class="text-sm font-medium dark:text-white">Annalise Wallis</p>
        </div>
        <div>
          <svg
            class="rotate-90 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="1"
              stroke="#33363F"
              stroke-width="2"
              stroke-linecap="round"
            />
            <circle
              cx="6"
              cy="12"
              r="1"
              stroke="#33363F"
              stroke-width="2"
              stroke-linecap="round"
            />
            <circle
              cx="18"
              cy="12"
              r="1"
              stroke="#33363F"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  
  props: {
    isDarkMode: Boolean, 
  },
  methods: {
    toggleDarkMode() {
      this.$emit("toggle-dark-mode"); 
    },
  },
 
};
</script>
<style scoped>
.active {
  background-color: #f7fff4;
  border-right: 4px solid #76d4a5;
  border-image: linear-gradient(to bottom, #42b983, #00b4d8) 1 0 0 0 0;
  transition: 0.2s;
}
.dark .active {
  background-color: #2a2b29;
  border-right: 4px solid #76d4a5;
  border-image: linear-gradient(to bottom, #42b983, #00b4d8) 1 0 0 0 0;
  transition: 0.2s;
}
.dark svg > path {
  stroke: #c5c8c4;
  fill: #c5c8c4;
}
.dark svg {
  fill: #c5c8c4;
}
.dark svg > circle {
  fill: #c5c8c4;
}
.dark svg > rect {
  stroke: #c5c8c4;
  fill: #c5c8c4;
}
.back {
  background-image: linear-gradient(to left, #42b983, #00b4d8);
}
</style>

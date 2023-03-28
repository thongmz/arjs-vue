<template>

<div style="background-image: url('/data/background.jpeg'); background-repeat: no-repeat; width: 600px; height: 600px;">

	 <div style="height: 80%;">
		
		<vue3dLoader
		:width="1000"
		:height="1000"
		    filePath="/data/hiphop.fbx"
		    :backgroundAlpha="0"
		    :autoPlay="autoPlay"
		    :scale="{x:0.5, y:0.5, z:0.5}"
		    :position="{x:-60, y:100, z:0}"
		  />

	</div>
	<div class="check-box">
	      <input type="checkbox" @change="change()" checked />
	      <h3 style="color: red">{{ autoPlay ? "Play" : "Stop" }}</h3>
    </div>
    <button @click="change()">Menu1</button>
    <button @click="change()">Menu2</button>
    <button @click="change()">Menu3</button>

</div>
</template>
<script>
	export default {
		 name: "Test3D",
		 data() {
	    return {
		      autoPlay: true,
		    };
		  },
		  methods: {
		    change() {
		    console.log('-----re')
		      if (this.autoPlay) {
		        this.autoPlay = false;
		      } else {
		        this.autoPlay = true;
		      }
		    },
		  },
	}
</script>
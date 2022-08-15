<template>
	<div v-if="show">
		<ClientOnly>
			<div class="border border-slate-100">
				<apexchart height="500" type="line" :options="options" :series="series"></apexchart>
			</div>
		</ClientOnly>
	</div>
</template>

<script>
	export default {
		mounted() {
			setTimeout(() => {
				this.show = true;
			}, 150);
		},
		data() {
			return {
				show: false,
				/** @type {import('apexcharts').ApexOptions} */
				options: {
					chart: {
						id: "vuechart-example",
						toolbar: {
							show: false,
						},
					},
					grid: {
						yaxis: {
							lines: {
								show: true,
							},
						},
					},
					stroke: {
						curve: "smooth",
						lineCap: "round",
						width: 3,
					},
					xaxis: {
						categories: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
					},
					colors: ["#ff0000", "#00ff00"],
				},
				series: [
					{
						name: "Bal at end of month",
						data: [45, 50, 49, 60, 70, 91],
					},
					{
						name: "Bal at start of month",
						data: [55, 15, 89, 11, 45, 23],
					},
				],
			};
		},
	};
</script>

<style></style>

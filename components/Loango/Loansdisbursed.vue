<template>
	<div>
		<h1 class="text-xl font-medium mb-2">Disbursed Loans</h1>
		<div v-if="show">
			<ClientOnly>
				<apexchart height="400" type="area" :options="options" :series="series"></apexchart>
			</ClientOnly>
		</div>
	</div>
</template>

<script>
	export default {
		mounted() {
			setTimeout(() => {
				this.show = true;
			}, 150);
			this.rn = setInterval(() => {
				this.series[0].data = this.random();
				this.series[1].data = this.random();
			}, 9000);
		},
		unmounted() {
			clearInterval(this.rn);
		},
		methods: {
			random() {
				let d = [];
				for (let i = 0; i < 12; i++) {
					d.push(Math.floor(Math.random() * 110) + 1);
				}
				return d;
			},
		},
		data() {
			return {
				rn: null,
				show: false,
				/** @type {import('apexcharts').ApexOptions} */
				options: {
					chart: {
						id: "vuechart-example",
						toolbar: {
							show: false,
						},
					},
					dataLabels: {
						enabled: false,
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
						width: 2,
					},
					xaxis: {
						categories: [
							"Jan",
							"Feb",
							"Mar",
							"Apr",
							"May",
							"June",
							"Jul",
							"Aug",
							"Sep",
							"Oct",
							"Nov",
							"Dec",
						],
					},
					colors: ["#6366f1", "#06b6d4"],
				},
				series: [
					{
						name: "2021",
						data: [45, 50, 49, 60, 70, 91, 120, 54, 100, 20, 30, 110],
					},
					{
						name: "2022",
						data: [45, 50, 49, 60, 70, 91, 120, 54, 100, 20, 30, 110].reverse(),
					},
				],
			};
		},
	};
</script>

<style></style>

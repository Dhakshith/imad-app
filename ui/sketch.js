function setup() {
	createCanvas(1599, 768);
	angleMode(DEGREES);
}

function draw() {
	background(255);
	translate((canvas.width / 2) - 25, (canvas.height / 2) - 25);
	rotate(270);

	let hr = hour();
	let mn = minute();
	let sc = second();

	let Diameter = 420;

	strokeWeight(8);
	stroke(0);
	fill(0);
	arc(0, 0, Diameter, Diameter, 0, 360);

	strokeWeight(4);
	noFill();

	stroke(255, 100, 150);
	let secondAngle = map(sc + 4, 0, 60, 0, 360);
	arc(0, 0, 400, 400, 0, secondAngle);

	stroke(150, 100, 255);
	let minuteAngle = map(mn + 4, 0, 60, 0, 360);
	arc(0, 0, 380, 380, 0, minuteAngle);

	stroke(150, 255, 100);
	let hourAngle = map(hr + 1, 0, 12, 0, 360);
	arc(0, 0, 360, 360, 0, hourAngle);

	stroke(255);
	arc(0, 0, 420, 420, 0, 360);

	push();
	rotate(secondAngle);
	stroke(255, 100, 150);
	line(0, 0, 100, 0);
	pop();

	push();
	rotate(minuteAngle);
	stroke(150, 100, 255);
	line(0, 0, 75, 0);
	pop();

	push();
	rotate(hourAngle);
	stroke(150, 255, 100);
	line(0, 0, 50, 0);
	pop();

	stroke(0);
	point(0, 0);

	rotate(90)
	fill(255);
	textSize(50);
	fill(255);

	var Radius = Diameter / 2;
	var Align = Radius / 1.5;

	text(1, cos(67.5) * Align + 12, sin(-67.5) * Align + 20);
	text(2, cos(22.5) * Align - 12, sin(-22.5) * Align);
	text(3, 145, 14);
	text(4, cos(22.5) * Align - 12, (sin(22.5) * Align) + 40);
	text(5, cos(67.5) * Align + 10, sin(67.5) * Align + 22);
	text(6, -15, 165);
	text(7, -cos(67.5) * Align - 35, sin(67.5) * Align + 20);
	text(8, (-cos(22.5) * Align) - 15, (sin(22.5) * Align) + 40);
	text(9, -170, 18);
	text(10, (-cos(22.5) * Align) - 30, sin(-22.5) * Align);
	text(11, -cos(67.5) * Align - 50, sin(-67.5) * Align + 16);
	text(12, -30, -132);
}

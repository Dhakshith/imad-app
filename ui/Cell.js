function Cell(i, j, w) {
	this.i = i;
	this.j = j;
	this.x = i * w;
	this.y = j * w;
	this.w = w;
	this.neighborCount = 0;
	this.bee = false;
	this.revealed = false;
}

Cell.prototype.show = function() {
	stroke(0);
	noFill(255);
	rect(this.x, this.y, this.w, this.w);
	if (this.revealed) {
		if (this.bee) {
			fill(127);
			ellipse(this.x + this.w * 0.5, this.y + this.w * 0.5, this.w * 0.5);
		} else {
			fill(200);
			rect(this.x, this.y, this.w, this.w);
			if (this.neighborCount > 0) {
				textAlign(CENTER);
				fill(0);
				textSize(35);
				c = color(175, 100, 220);
				blueValue = blue(c);
				print(blueValue);
				fill(0, 0, blueValue);
				text(this.neighborCount, this.x + this.w * 0.5, this.y + this.w - 12);
			}
		}
	}
}

Cell.prototype.countBees = function() {
	if (this.bee) {
		this.neighborCount = -1;
		return;
	}
	var total = 0;
	for (var xOff = -1; xOff <= 1; xOff++) {
		for (var yOff = -1; yOff <= 1; yOff++) {
			var i = this.i + xOff;
			var j = this.j + yOff;

			if (i > -1 && i < cols && j > -1 && j < rows) {
				var neighbor = grid[i][j];

				if (neighbor.bee) {
					total++;
				}
			}
		}
	}
	this.neighborCount = total;
}

Cell.prototype.contains = function(x, y) {
	return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
}

Cell.prototype.reveal = function() {
	this.revealed = true;

	if (this.neighborCount == 0) {
		// Flood Fill Time !!!
		this.floodFill();
	}
}

Cell.prototype.floodFill = function() {
	for (var xOff = -1; xOff <= 1; xOff++) {
		for (var yOff = -1; yOff <= 1; yOff++) {
			var i = this.i + xOff;
			var j = this.j + yOff;

			if (i > -1 && i < cols && j > -1 && j < rows) {
				var neighbor = grid[i][j];

				if (!neighbor.bee && !neighbor.revealed) {
					neighbor.reveal();
				}
			}
		}
	}
}

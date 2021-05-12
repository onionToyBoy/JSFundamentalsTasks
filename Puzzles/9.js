class Shape {
	constructor(name) {
		this.name = name;
	}
	getPerimeter() {}
	getArea() {}
}

class Rectangle extends Shape {
	constructor(name, width, height) {
		super(name);
		this.width = width;
		this.height = height;
	}
	getPerimeter() {
		return (this.width + this.height) * 2;
	}
	getArea() {
		return this.width * this.height;
	}
}

class Square extends Shape {
	constructor(name, sideLength) {
		super(name);
		this.sideLength = sideLength;
	}
	getPerimeter() {
		return this.sideLength * 4;
	}
	getArea() {
		return this.sideLength * this.sideLength;
	}
}

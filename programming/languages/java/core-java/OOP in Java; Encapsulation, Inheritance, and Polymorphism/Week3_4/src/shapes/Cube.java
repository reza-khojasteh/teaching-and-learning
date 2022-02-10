package shapes;

public class Cube extends Square {
	private double height;
	
	public double getHeight() {
		return height;
	}

	public void setHeight(double height) {
		this.height = height;
	}

	public Cube(double side) {
		super(side);
		this.height = side;
		System.out.println("Cube constructor was called");
	}
	
	@Override
	public double area() {
		return (super.area() * 6.0);
	}
	
	public double volume() {
		return (super.area() * getHeight());
	}
}

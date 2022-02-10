package shapes;

public class Rectangle implements Shape {
	private double width;
	private double length;
	
	public Rectangle(double width, double height) {
		this.width = width;
		this.length = height;
		System.out.println("Rectangle constructor was called");
	}
	
	public double getWidth() {
		return width;
	}

	public void setWidth(double width) {
		this.width = width;
	}

	public double getHeight() {
		return length;
	}

	public void setHeight(double height) {
		this.length = height;
	}

	@Override
	public double area() {
		return getWidth() * getHeight();
	}
	
	@Override
	public String toString() {
		return String.format("This is a %s", this.getClass().getName());
	}
}

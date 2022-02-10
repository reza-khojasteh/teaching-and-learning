package main;
import shapes.Cube;
import shapes.Rectangle;
import shapes.Shape;
import shapes.Square;

public class Main {
	public static void main(String[] args) {
		Shape[] shapes = new Shape[3];
		shapes[0] = new Rectangle(2.4, 1.5);
		shapes[1] = new Square(3.7);
		shapes[2] = new Cube(4.8);
		//While checking the output, pay attention to constructor chaining too!
		
		for (Shape shape : shapes) {
			System.out.println(shape);
			System.out.printf("The area of %s is: %.2f\n", 
					shape.getClass().getName(), shape.area());
			//As you see above, a single call could be interpreted in many different ways
			//at run-time; what we know as dynamic binding
			
			if (shape instanceof Cube) {
				System.out.printf("The volume of %s is: %.2f\n", 
						shape.getClass().getName(), ((Cube)shape).volume());				
			}
		}
	}
}

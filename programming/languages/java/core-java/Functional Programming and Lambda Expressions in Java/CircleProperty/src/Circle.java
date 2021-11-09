public class Circle {
	public double circleValue(double radius, CircleProperty cr) {
		return cr.get(radius);
	}
	
	public static void main(String[] a) {
		Circle circle = new Circle();
		CircleProperty area = radius -> Math.PI * radius * radius;
		CircleProperty circumference = raduis -> 2 * Math.PI * raduis;
//		CircleProperty squareRootRadius = radius -> Math.sqrt(radius);
		//it would be nicer expressed using method references:
		CircleProperty squareRootRadius = Math::sqrt;	
		
		double myCircleArea = circle.circleValue(1.5, area);
		double myCircleCircumference = circle.circleValue(2, circumference);
		double myCircleSquareRootRadius = circle.circleValue(16, squareRootRadius);
		
		System.out.println("Circumference = " + myCircleCircumference);
		System.out.println("Area = " + myCircleArea);
		System.out.println("SquareRootRadius = " + myCircleSquareRootRadius);
	}
} 
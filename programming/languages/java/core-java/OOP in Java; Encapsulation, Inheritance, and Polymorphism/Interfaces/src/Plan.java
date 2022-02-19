import java.util.Arrays;

public class Plan {

	Point[] plan = new Point[] {new Point(0,0), new Point(1,1)};

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + Arrays.hashCode(plan);
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Plan other = (Plan) obj;
		if (!Arrays.equals(plan, other.plan))
			return false;
		return true;
	}

	public void forEach() {
		for (Point p : plan)
			p.move();
	}


	public static void main(String[] a) {
		Plan small = new Plan();
		OuterInterface.InnerInterface[] outerInterface = small.plan;
		System.out.println(Arrays.toString(outerInterface));

		outerInterface[0].move(); 
		outerInterface[1].move(); 
		System.out.println(Arrays.toString(outerInterface));

		Plan big = new Plan();
		big.forEach();
		System.out.println(Arrays.toString(big.plan));

		System.out.println(small.equals(big));
	}

}

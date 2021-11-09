public class IntegerOperator {
	public static void main(String[] args) {

		// lambda expression
		GenericOperator<Integer> sum = numbers -> {
			Integer total = 0;

			for (Integer x : numbers)
				total = total + x;

			return total;
		};

		System.out.println("Addition result: " + sum.operate(1, 2, 3, 4, 5));
	}
}

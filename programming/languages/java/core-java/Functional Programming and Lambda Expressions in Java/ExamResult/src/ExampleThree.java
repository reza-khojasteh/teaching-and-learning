public class ExampleThree {
	public static void main(String[] args) {
		System.out.println(ExampleOne.result(new Student("John"), s -> s + ": Passed"));
	}
}

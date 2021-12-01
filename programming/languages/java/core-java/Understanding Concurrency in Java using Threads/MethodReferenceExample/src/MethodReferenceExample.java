public class MethodReferenceExample {
	// Static Method References
	public static void run() {
		for (int i = 0; i < 3; i++)
			System.out.println(i + " squared is: " + i * i);
	}

	public static void main(String[] args) {
		// One can access a method (lambda expression) using the :: notation
		// ClassName :: methodName
		new Thread(MethodReferenceExample::run).start();
	}
}

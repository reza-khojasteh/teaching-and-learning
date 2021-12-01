public class FunctionalExample {
	public static void main(String[] args) {
		new Thread(() -> {
			for (int i = 0; i < 3; i++)
				System.out.println(i + " squared is: " + i * i);
		}).start();
	}
}

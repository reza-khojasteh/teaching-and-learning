public class InstanceMethodReferenceExample {
	public void run() {
		for (int i = 0; i < 3; i++)
			System.out.println(i + " squared is: " + i * i);
	}

	public static void main(String[] args) {
		InstanceMethodReferenceExample imre = new InstanceMethodReferenceExample();
		new Thread(imre::run).start();
	}
}

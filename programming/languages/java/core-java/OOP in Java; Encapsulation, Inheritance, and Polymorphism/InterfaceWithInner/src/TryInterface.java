interface Strange {

	String TEST = "JAC444";

	void takeTest();

	public class Test {
		private String test;

		public Test(String testName) {
			test = testName;	
		}

		public void takeTest() {
			System.out.println("Inside Test: " + test);
		}
	}
}

public class TryInterface {
	public static void main(String[] args) {

		new Strange() {		
			public void takeTest() {
				new Test(TEST + " is easy").takeTest();				
			}		
		}.takeTest();
	}

}
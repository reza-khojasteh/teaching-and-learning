
public class MyExamRunnable implements Runnable {
	private int mark;

	MyExamRunnable(int m) { 
		mark = m; 
	}

	public void run() {
//		try {
//			Thread.sleep(5000);
//		} catch (InterruptedException e) {
//			e.printStackTrace();
//		}

		if (mark > 55)
			System.out.println("Exam is passed!");
		System.out.println(getClass().getName() + " exits....");
	}

	public static void main(String args[]) {
		(new Thread(new MyExamRunnable(75))).start();
		System.out.println("main exits....");
	} 
}

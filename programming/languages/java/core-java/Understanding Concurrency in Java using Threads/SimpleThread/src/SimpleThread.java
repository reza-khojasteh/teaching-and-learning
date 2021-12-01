public class SimpleThread extends Thread {
	public SimpleThread(String str) {
		super(str);
	}
	
	public void run() {
		for (int i = 0; i < 3; i++) {
			System.out.println(i + " " + getName());
			try {
				Thread.sleep((long)(Math.random() * 1000));
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
		System.out.println("DONE! " + getName());
	}
	
	public static void main (String[] args) {
		Thread t1 = new SimpleThread("First");
		t1.start();
		Thread t2 = new SimpleThread("Second");
		t2.start();
		
//		try {
//			t1.join(1000);
//			t2.join();
//		} catch (InterruptedException e) {
//			e.printStackTrace();
//		}
		
		System.out.println("DONE ALL!");
	}
}
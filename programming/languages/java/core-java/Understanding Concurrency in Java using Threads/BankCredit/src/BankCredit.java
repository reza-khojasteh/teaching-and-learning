public class BankCredit implements Runnable {
	private int balance;

	// BankCredit constructor
	public BankCredit (int balance) {
		this.balance = balance;
	}

	// Override run() method of Runnable to execute a new thread
	public void run() {
		// Get current active thread
		Thread activeThread = Thread.currentThread();
		System.out.println("The thread named: " + activeThread.getName() + " is starting.");
		
		for (int i = 0; i < 3; i++) {
			creditAccount(10);
		}
		
		System.out.println("The thread named: " + activeThread.getName() + " is ending.");
	}

	// Credit account 
	public void creditAccount (int credit) {
		Thread activeThread = Thread.currentThread();
		System.out.println("Thread named: " + activeThread.getName() + " entering creditAccount().");

		// Here, is the point there could be problems with concurrency, so we can synchronize the following code
//		synchronized (this) {
			// Move balance to an int and then update from int so its non-atomic
			int temp = balance;
			System.out.println("Thread named: " + activeThread.getName() + " about to add " 
					+ credit + " canadian dollars.");
			balance = temp + credit;
//		}
		
		System.out.println("Account balance is now: " + balance);
		System.out.println("Thread named: " + activeThread.getName() + " exiting creditAccount().");
	}

	public static void main(String[] args) {
		System.out.println("Main user thread has started.");
		// Create a Runnable object
		BankCredit tbc = new BankCredit(0);
		
		// Create two threads which share the same bank credit
		Thread th1 = new Thread(tbc, "credit-1");
		Thread th2 = new Thread(tbc, "credit-2");
		
		// Power up the threads via the start() method
		th1.start();
		th2.start();
		
		System.out.println("Main user thread has ended.");
	}
}
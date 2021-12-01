public class BeCarefulAboutWait{  
	public static void main(String args[]) {  
		final Account account = new Account(); 
		
		new Thread(){  
			public void run() {
				account.withdraw(15000);
			}  
		}.start();  
		
		new Thread(){  
			public void run() {
				account.deposit(1000);
			}  
		}.start();  
	}
}


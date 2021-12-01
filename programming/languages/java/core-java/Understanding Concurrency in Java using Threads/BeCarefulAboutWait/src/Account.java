class Account {  
	private int amount = 10000;  

	public synchronized void withdraw(int amount) {  
		System.out.println("going to withdraw...");  

		if(this.amount < amount) {  //BE CAREFUL!
			System.out.println("Less balance; waiting for deposit...");  
			try {
				wait();
			} catch(Exception e) {
				e.printStackTrace();
			}  
		}  
		
		this.amount -= amount;  
		System.out.printf("withdraw completed.... Amount remained is: %d%n", this.amount);  
	}  

	public synchronized void deposit(int amount) {  
		System.out.println("going to deposit...");  
		this.amount += amount;  
		System.out.println("deposit completed... ");  
		notify();  
	}  
}  

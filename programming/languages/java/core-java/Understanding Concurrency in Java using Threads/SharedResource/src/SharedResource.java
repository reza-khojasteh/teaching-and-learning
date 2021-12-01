/** This program tests multiple threads modifying a shared resource.*/
public class SharedResource {
	public static void main(String[] args) {
		if (args.length == 0) {
			System.out.println("usage: java SharedResource <number of resources>");
			System.exit(0);
		}	

		int numberOfResources = 0;
		try {
			numberOfResources = Integer.parseInt(args[0]);
		} catch (NumberFormatException e) { 
			System.out.println("String: <" + args[0] + "> must be an integer number.");
		}

		Container container = new Container();//The shared container containing a shared int
		
		ProduceResource p = new ProduceResource(container, numberOfResources);
		ConsumeResource c = new ConsumeResource(container, numberOfResources);
		
		p.start();
		c.start();
	}
}

/** Definition of a Thread class ProduceResource */
class ProduceResource extends Thread {
	private Container pHold;
	private int numberOfResources;
	
	public ProduceResource(Container c, int n) {
		super("Producer of Resource");
		pHold = c;
		numberOfResources = n;
	}
	
	public void run() {
		for (int count = 1; count <= numberOfResources; count++) {
			// sleep for a random interval
			try {
				Thread.sleep( (int) ( Math.random() * 3000 ) );
			} catch(InterruptedException e) {
				System.err.println(e.toString());
			}
			
			pHold.setSharedResource(count);
		}

	}
}

/** Definition of a Thread class ConsumeResource */
class ConsumeResource extends Thread {
	private Container cHold;
	private int numberOfResources;

	public ConsumeResource(Container c, int m) {
		super("Consumer of Resource");
		cHold = c;
		numberOfResources = m;
	}
	
	public void run() {
		int val;
		do {
			// sleep for a random interval
			try {
				Thread.sleep( (int) ( Math.random() * 3000 ) );
			} catch(InterruptedException e) {
				System.err.println(e.toString());
			}
			val = cHold.getSharedResource();
		} while (val != numberOfResources);

	}
}

/** Definition of a Container */
class Container {
	private int sharedInt = 0;
	private boolean writeable = true;  // condition variable

	/** synchronized method for setting the resource:
	The code in the get method loops until the Producer has produced a new value. 
	Each time through the loop, the get method calls the wait method; 
	The wait method relinquishes the lock held by the Consumer on the Container
	(thereby allowing the Producer to get the lock and update the Container)
	and then waits for notification from the Producer.*/
	public synchronized void setSharedResource(int val) {
		//Consider commenting the following while loop to see that the producer
		//could produce the next element without waiting for the previous to be consumed!
		while (!writeable) {  // not the producer's turn
			try { 
				System.out.println("Waiting for Consumer...");
				wait();  
			} catch ( InterruptedException e ) { 
				e.printStackTrace();
			}
		}

		System.err.println( Thread.currentThread().getName() +
				" generates Resource value number = " + val );
		sharedInt = val;
		writeable = false;
		notify();  // tell a waiting thread to become ready
	}

	/** synchronized method for getting the resource:
	When the Producer puts something in the Container, 
    it notifies the Consumer by calling notifyAll. 
    The Consumer then comes out of the wait state, the loop exits, 
    and the get method returns the value in the Container. 
    The set method works in a similar fashion, waiting for the Consumer thread to consume 
    the current value before allowing the Producer to produce a new one.*/
	public synchronized int getSharedResource() {
		//Consider commenting the following while loop to see that the consumer 
		//could consume the current element several times without waiting for the next to be produced!
		while (writeable) {   // not the consumer's turn
			try { 
				System.out.println("Waiting for Producer...");
				wait();
			} catch (InterruptedException e) { 
				e.printStackTrace();
			}
		}
		
		writeable = true;
		notify();  // tell a waiting thread to become ready
		System.err.println( Thread.currentThread().getName() +
				" uses Resource value number = " + sharedInt + "\n");
		return sharedInt;
	}
}
public class Automobile {

	private String carName;
	private Wheel frontWheel; 
	private Wheel rearWheel;
	private Wheel extra;

	/** default constructor of outer class */
	public Automobile(String carName) {
		this.carName = carName;
		frontWheel = new Wheel();//new Wheel()
		rearWheel = this.new Wheel("GoodYear", 1.2f);
	}	

	public Wheel thirdWheel(Automobile car) {
		if (car.extra == null) {
			car.extra = car.new Wheel("Reserve", 1.1f);
		}
		
		System.out.println("Car: " + car.carName);
		System.out.println("Extra type wheel: " + car.extra.hubcapType);
		System.out.println("Extra radius wheel: " + car.extra.radius);
		
		return car.extra;
	}

	/** Wheel inner class */
	private class Wheel {
		private String hubcapType;
		private float radius;

		/** no-argument constructor of inner class */
		public Wheel() {
			hubcapType = "";
			radius = 0.0f;
		}

		public Wheel(String type, float r) {
			hubcapType = type;
			radius = r;
		}   
	}

	public static void main(String[] args) {

		Automobile myCar = new Automobile("Honda");
		Automobile yourCar = new Automobile("BMW");    		
		myCar.extra = myCar.thirdWheel(yourCar);
		//System.out.println(myCar.extra.equals(yourCar.extra));
	}
}

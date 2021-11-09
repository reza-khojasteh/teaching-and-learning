public class PlayWithThings<T> {

	private T[] things;

	public void forEach(Action<T> action) {
		for (T t : things)
			action.change(t);
	}

	public String toString() {
		String result = "";
		for (T t : things)
			result += t.getClass().getName() + ": " + t.toString() + "\n";
		return result;
	}

	public static void main(String[] args) {
		PlayWithThings<Point> playWithPoints = new PlayWithThings<>();

		playWithPoints.things = new Point[] { new Point(0, 0), new Point(1, 1) };
		
		// forEach takes as arguments Action<T> object
		// Action<T> is an interface; you can create an object of type Action<T>
		// if there is a class that implements Action<T> OR
		// if you build an instance of this class as an anonymous class OR
		// if you use lambda expressions
		// here are the possible implementations:
		
		//imp1:
//		class MoveAction<T extends Point> implements Action<T> {
//
//			@Override
//			public void change(T p) {
//				p.move(10, 10);
//			}
//			
//		}
//		
//		MoveAction<Point> innerClassImp = new MoveAction<>();
//		playWithPoints.forEach(innerClassImp);
		
		//imp2:
//		playWithPoints.forEach(new Action<Point>() {
//			public void change(Point p) {
//				p.move(10,10);
//			}		
//		});
		
		//imp3:
//		playWithPoints.forEach(p -> p.move(10, 10));
//
		System.out.println(playWithPoints);
	}
}

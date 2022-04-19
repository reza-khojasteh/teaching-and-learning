class GenericsType<T> {

	private T t;

	public T get() {
		return this.t;
	}

	public void set(T t) {
		this.t = t;
	}

	public static void main(String args[]) {
		GenericsType<String> type = new GenericsType<>();
		type.set("JAC444"); // valid

		//pay attention to the warnings below!
		//Although GenericsType is a generic type defined as GenericsType<T>, 
		//the statement "GenericsType type1 = new GenericsType();"
		//compiles because GenericsType is a raw type!
		//Though it might seem OK to you, avoid doing this
		//because you might get possible errors at run time!
		
		GenericsType type1 = new GenericsType(); // raw type
		type1.set("JAC444"); // valid
		type1.set(10); // valid (with autoboxing support)
	}
}
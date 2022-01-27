public class WalkOne {

	public static int q = 10;
	private int id;
	private String info;

	public WalkOne( int id, String s ) {

		System.out.println( ">>>" + this.id + "," + info );
		this.id = id;
		info = s;
		q++;

	}

	public WalkOne() { 
		this(1111, null); 
	};

	public void setInfo( String info ) {
		this.info = info;
	}

	public String getInfo() { 
		return info; 
	}

	public String toString() {
		String s;
		s = "details: " + id + "," + info + "\n";
		return s;
	}

	public static void main( String args[] ) {

		WalkOne phil = null, george = null;
		System.out.println( "What is this?" + phil + "," + george );

		phil = new WalkOne();
		System.out.println( phil );

		george = new WalkOne( 7777, "jac444" );
		System.out.println( george );

		System.out.println( WalkOne.q );	
		phil = george;
		System.out.println( phil );
		george.setInfo( george.getInfo() + "???" );
		String output = george.toString();

		phil.setInfo( "byebye" );
		System.out.println( output );
		System.out.println( george );
	}
}
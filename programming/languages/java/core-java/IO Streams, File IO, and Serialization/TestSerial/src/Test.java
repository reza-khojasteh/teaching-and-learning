import java.io.Serializable;
public class Test implements Serializable {

	private String str;//try transient
	private int ivalue;//try static

	public Test(String s, int i) {
		str = s;
		ivalue = i;
	}

	public String getString() {
		return str;
	}

	public int getInt() {
		return ivalue;
	}
}

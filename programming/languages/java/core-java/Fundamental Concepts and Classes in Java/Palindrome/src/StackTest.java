import static org.junit.Assert.*;

import org.junit.Test;

public class StackTest {

	@Test
	public void testPop() {
		Stack s = new Stack(2);
		s.push('a');
		s.push('b');
		assertEquals(s.pop(), 'b');
		assertEquals(s.pop(), 'a');
	}

	@Test
	public void testIsEmpty() {
		Stack s = new Stack(2);
		s.push('a');
		s.push('b');
		s.pop();
		s.pop();
		assertEquals(s.isEmpty(), true);
		assertNotEquals(s.isEmpty(), false);
	}

}

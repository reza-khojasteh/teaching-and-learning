# Java 8's [Optional](https://docs.oracle.com/javase/8/docs/api/java/util/Optional.html)

Optional is a container object **which may or may not contain a non-null value** and can be helpful _to avoid [NullPointerException](https://docs.oracle.com/javase/8/docs/api/java/lang/NullPointerException.html)s in Java_.

We can use the method **ifPresentOrElse()** (as an example and among other methods) to check _if a value is present and we should perform the given action with the value_, or _otherwise, we should perform another given action_.

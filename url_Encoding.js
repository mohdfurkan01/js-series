//* URL encoding, also known as percent encoding, converts characters into a format that can be transmitted over the Internet. Characters are replaced with a percent sign (%) followed by two hexadecimal digits representing the character’s ASCII code.

//* Space ( ) is encoded as %20
//*    ! is encoded as %21
//*    # is encoded as %23
//*    $ is encoded as %24
//*    & is encoded as %26
//*    + is encoded as %2B

//TODO=> the string hello world becomes hello%20world in a URL.
//! Why %20 Specifically?
//? When you include spaces in a URL, they need to be encoded because spaces are not allowed in URLs. In URL encoding:

//? A space character is replaced with %20 to ensure the URL is valid and can be properly understood by web servers and browsers.

//* https://example.com/search?query=hello world
//? This URL may not be correctly interpreted because of the space.
//!URL with encoding
//* https://example.com/search?query=hello%20world
//? This URL is properly encoded and will be correctly interpreted

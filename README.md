This repository contains the software package for the calculation of the Foo et al. parameterization, an implementation of Foo physics. 
This package serves as a base to be utilized and continuously supported by Foo scientists in the field for various numerical software. 
Currently, the calculation function is able to find the volume of atmospheric Foo shapes.

# Installation
Requires [Node.js](https://nodejs.org) and [npm](https://www.npmjs.com/)

```bash
$ npm install foo-et-al
```

# Usage
```javascript
const Foo = require("FooEtAl")

// Create an instance of the Foo Et Al class
const fooEtAl = new Foo.FooEtAl();

// Calculation
fooEtAll.calculate(6) // 904.778684...
```

# Contribution
Want to support the Foo physics team? Sure thing!

All types of contributions are encouraged and valued. 
Please make sure to read the relevant guidelines on the official website before making your contribution.

> And if you like the project, but just don't have time to contribute, that's fine. There are other easy ways to support the project and show your appreciation, which we would also be very happy about:
> - Star the project
> - Refer to this package in your project's readme
> - Mention Foo physics at local meetups and tell your friends/colleagues

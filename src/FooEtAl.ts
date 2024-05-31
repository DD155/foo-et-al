/** 

A software package that calculates the complex Foo et al. parameterization. 
For our purposes, the parameterization can take the radius of a sphere and return its volume.
A class is defined for FooEtAl to be iteratively expanded upon in the future.

*/

class FooEtAl {
    /**
     * Calculate the parameterization of the Foo et al function. 
     * @param {number} radius - The radius of the sphere. Precondition: Must be non-negative.
     * @param {any[]} args - Any additional parameters for the future, which may be of different data types for flexiblity.
     * @return {number} The volume of a sphare, or NaN if invalid arg for radius.
     */
    calculate = (radius: number, ...args: any[]) : number => {
        if (!this.verifyArgs(radius, args)) return NaN

        let volume:number = (4/3) * Math.PI * Math.pow(radius, 3)
        return volume
    }

    /**
     * Verify the numerical argument(s) to be non-negative.
     * @param {any[]} args - Arguments passed in, including the radius.
     * @returns {boolean} - If the numerical arguments are non-negative, true is returned.
     */
    verifyArgs = (...args: any) => {
        for (const arg of args) {
            if (typeof arg == 'number') {
                if (arg < 0) {
                    console.error("Numeric argument cannot be negative.")
                    return false
                }
            }
        }
        return true
    }
}

module.exports = {
    FooEtAl: FooEtAl
}
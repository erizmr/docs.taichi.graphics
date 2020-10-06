(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{498:function(t,e,a){"use strict";a.r(e);var r=a(20),v=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"matrices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#matrices"}},[t._v("#")]),t._v(" Matrices")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("ti.Matrix")]),t._v(" is for small matrices (e.g. [3x3]{.title-ref}) only. If\nyou have [64x64]{.title-ref} matrices, you should consider using a\n2D scalar field.")]),t._v(" "),a("li",[a("code",[t._v("ti.Vector")]),t._v(" is the same as "),a("code",[t._v("ti.Matrix")]),t._v(", except that it has only one\ncolumn.")]),t._v(" "),a("li",[t._v("Differentiate element-wise product "),a("code",[t._v("*")]),t._v(" and matrix product "),a("code",[t._v("@")]),t._v(".")]),t._v(" "),a("li",[a("code",[t._v("ti.Vector.field(n, dtype=ti.f32)")]),t._v(" or\n"),a("code",[t._v("ti.Matrix.field(n, m, dtype=ti.f32)")]),t._v(" to create vector/matrix\nfields.")]),t._v(" "),a("li",[a("code",[t._v("A.transpose()")])]),t._v(" "),a("li",[a("code",[t._v("R, S = ti.polar_decompose(A, ti.f32)")])]),t._v(" "),a("li",[a("code",[t._v("U, sigma, V = ti.svd(A, ti.f32)")]),t._v(" (Note that "),a("code",[t._v("sigma")]),t._v(" is a "),a("code",[t._v("3x3")]),t._v("\ndiagonal matrix)")]),t._v(" "),a("li",[a("code",[t._v("any(A)")]),t._v(" (Taichi-scope only)")]),t._v(" "),a("li",[a("code",[t._v("all(A)")]),t._v(" (Taichi-scope only)")])]),t._v(" "),a("p",[t._v("TODO: doc here better like Vector. WIP")]),t._v(" "),a("p",[t._v("A matrix in Taichi can have two forms:")]),t._v(" "),a("ul",[a("li",[t._v("as a temporary local variable. An "),a("code",[t._v("n by m")]),t._v(" matrix consists of\n"),a("code",[t._v("n * m")]),t._v(" scalar values.")]),t._v(" "),a("li",[t._v("as a an element of a global field. In this case, the field is an\nN-dimensional array of "),a("code",[t._v("n by m")]),t._v(" matrices.")])]),t._v(" "),a("h2",{attrs:{id:"declaration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#declaration"}},[t._v("#")]),t._v(" Declaration")]),t._v(" "),a("h3",{attrs:{id:"as-global-matrix-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#as-global-matrix-fields"}},[t._v("#")]),t._v(" As global matrix fields")]),t._v(" "),a("p",[t._v("::: {.function}\nti.Matrix.field(n, m, dtype, shape = None, offset = None)")]),t._v(" "),a("p",[t._v("parameter n")]),t._v(" "),a("p",[t._v(": (scalar) the number of rows in the matrix")]),t._v(" "),a("p",[t._v("parameter m")]),t._v(" "),a("p",[t._v(": (scalar) the number of columns in the matrix")]),t._v(" "),a("p",[t._v("parameter dtype")]),t._v(" "),a("p",[t._v(": (DataType) data type of the components")]),t._v(" "),a("p",[t._v("parameter shape")]),t._v(" "),a("p",[t._v(": (optional, scalar or tuple) shape of the matrix field, see\n"),a("code",[t._v("tensor")]),t._v('{.interpreted-text role="ref"}')]),t._v(" "),a("p",[t._v("parameter offset")]),t._v(" "),a("p",[t._v(": (optional, scalar or tuple) see "),a("code",[t._v("offset")]),t._v('{.interpreted-text\nrole="ref"}')]),t._v(" "),a("p",[t._v("For example, this creates a 5x4 matrix field with each entry being a 3x3\nmatrix: :")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("# Python-scope\na = ti.Matrix.field(3, 3, dtype=ti.f32, shape=(5, 4))\n")])])]),a("p",[t._v(":::")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("In Python-scope, "),a("code",[t._v("ti.field")]),t._v(" declares a scalar field\n("),a("RouterLink",{attrs:{to:"/zh/versioned_docs/develop/documentation/api/scalar_field.html"}},[t._v("Scalar fields")]),t._v("), while "),a("code",[t._v("ti.Matrix.field")]),t._v("\ndeclares a matrix field.")],1)]),t._v(" "),a("h3",{attrs:{id:"as-a-temporary-local-variable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#as-a-temporary-local-variable"}},[t._v("#")]),t._v(" As a temporary local variable")]),t._v(" "),a("p",[t._v("::: {.function}\nti.Matrix([[x, y, ...], [z, w, ...], ...])")]),t._v(" "),a("p",[t._v("parameter x")]),t._v(" "),a("p",[t._v(": (scalar) the first component of the first row")]),t._v(" "),a("p",[t._v("parameter y")]),t._v(" "),a("p",[t._v(": (scalar) the second component of the first row")]),t._v(" "),a("p",[t._v("parameter z")]),t._v(" "),a("p",[t._v(": (scalar) the first component of the second row")]),t._v(" "),a("p",[t._v("parameter w")]),t._v(" "),a("p",[t._v(": (scalar) the second component of the second row")]),t._v(" "),a("p",[t._v("For example, this creates a 2x3 matrix with components (2, 3, 4) in the\nfirst row and (5, 6, 7) in the second row: :")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("# Taichi-scope\na = ti.Matrix([[2, 3, 4], [5, 6, 7]])\n")])])]),a("p",[t._v(":::")]),t._v(" "),a("p",[t._v("::: {.function}\nti.Matrix.rows([v0, v1, v2, ...])\n:::")]),t._v(" "),a("p",[t._v("::: {.function}\nti.Matrix.cols([v0, v1, v2, ...])")]),t._v(" "),a("p",[t._v("parameter v0")]),t._v(" "),a("p",[t._v(": (vector) vector of elements forming first row (or column)")]),t._v(" "),a("p",[t._v("parameter v1")]),t._v(" "),a("p",[t._v(": (vector) vector of elements forming second row (or column)")]),t._v(" "),a("p",[t._v("parameter v2")]),t._v(" "),a("p",[t._v(": (vector) vector of elements forming third row (or column)")]),t._v(" "),a("p",[t._v("For example, this creates a 3x3 matrix by concactinating vectors into\nrows (or columns): :")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("# Taichi-scope\nv0 = ti.Vector([1.0, 2.0, 3.0])\nv1 = ti.Vector([4.0, 5.0, 6.0])\nv2 = ti.Vector([7.0, 8.0, 9.0])\n\n# to specify data in rows\na = ti.Matrix.rows([v0, v1, v2])\n\n# to specify data in columns instead\na = ti.Matrix.cols([v0, v1, v2])\n\n# lists can be used instead of vectors\na = ti.Matrix.rows([[1.0, 2.0, 3.0], [4.0, 5.0, 6.0], [7.0, 8.0, 9.0]])\n")])])]),a("p",[t._v(":::")]),t._v(" "),a("h2",{attrs:{id:"accessing-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessing-components"}},[t._v("#")]),t._v(" Accessing components")]),t._v(" "),a("h3",{attrs:{id:"as-global-matrix-fields-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#as-global-matrix-fields-2"}},[t._v("#")]),t._v(" As global matrix fields")]),t._v(" "),a("p",[t._v("::: {.attribute}\na[p, q, ...][i, j]")]),t._v(" "),a("p",[t._v("parameter a")]),t._v(" "),a("p",[t._v(": (ti.Matrix.field) the matrix field")]),t._v(" "),a("p",[t._v("parameter p")]),t._v(" "),a("p",[t._v(": (scalar) index of the first field dimension")]),t._v(" "),a("p",[t._v("parameter q")]),t._v(" "),a("p",[t._v(": (scalar) index of the second field dimension")]),t._v(" "),a("p",[t._v("parameter i")]),t._v(" "),a("p",[t._v(": (scalar) row index of the matrix")]),t._v(" "),a("p",[t._v("parameter j")]),t._v(" "),a("p",[t._v(": (scalar) column index of the matrix")]),t._v(" "),a("p",[t._v("This extracts the first element in matrix "),a("code",[t._v("a[6, 3]")]),t._v(": :")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("x = a[6, 3][0, 0]\n\n# or\nmat = a[6, 3]\nx = mat[0, 0]\n")])])]),a("p",[t._v(":::")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[a("strong",[t._v("Always")]),t._v(" use two pair of square brackets to access scalar elements\nfrom matrix fields.")]),t._v(" "),a("ul",[a("li",[t._v("The indices in the first pair of brackets locate the matrix inside\nthe matrix fields;")]),t._v(" "),a("li",[t._v("The indices in the second pair of brackets locate the scalar\nelement inside the matrix.")])]),t._v(" "),a("p",[t._v("For 0-D matrix fields, indices in the first pair of brackets should be\n"),a("code",[t._v("[None]")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"as-a-temporary-local-variable-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#as-a-temporary-local-variable-2"}},[t._v("#")]),t._v(" As a temporary local variable")]),t._v(" "),a("p",[t._v("::: {.attribute}\na[i, j]")]),t._v(" "),a("p",[t._v("parameter a")]),t._v(" "),a("p",[t._v(": (Matrix) the matrix")]),t._v(" "),a("p",[t._v("parameter i")]),t._v(" "),a("p",[t._v(": (scalar) row index of the matrix")]),t._v(" "),a("p",[t._v("parameter j")]),t._v(" "),a("p",[t._v(": (scalar) column index of the matrix")]),t._v(" "),a("p",[t._v("For example, this extracts the element in row 0 column 1 of matrix "),a("code",[t._v("a")]),t._v(":\n:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("x = a[0, 1]\n")])])]),a("p",[t._v("This sets the element in row 1 column 3 of "),a("code",[t._v("a")]),t._v(" to 4: :")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("a[1, 3] = 4\n")])])]),a("p",[t._v(":::")]),t._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),a("p",[t._v("::: {.function}\na.transpose()")]),t._v(" "),a("p",[t._v("parameter a")]),t._v(" "),a("p",[t._v(": (ti.Matrix) the matrix")]),t._v(" "),a("p",[t._v("return")]),t._v(" "),a("p",[t._v(": (ti.Matrix) the transposed matrix of "),a("code",[t._v("a")]),t._v(".")]),t._v(" "),a("p",[t._v("For example:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("a = ti.Matrix([[2, 3], [4, 5]])\nb = a.transpose()\n# Now b = ti.Matrix([[2, 4], [3, 5]])\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[a("code",[t._v("a.transpose()")]),t._v(" will not effect the data in "),a("code",[t._v("a")]),t._v(", it just return the\nresult.")])]),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("p",[t._v("::: {.function}\na.trace()")]),t._v(" "),a("p",[t._v("parameter a")]),t._v(" "),a("p",[t._v(": (ti.Matrix) the matrix")]),t._v(" "),a("p",[t._v("return")]),t._v(" "),a("p",[t._v(": (scalar) the trace of matrix "),a("code",[t._v("a")]),t._v(".")]),t._v(" "),a("p",[t._v("The return value can be computed as "),a("code",[t._v("a[0, 0] + a[1, 1] + ...")]),t._v(".\n:::")]),t._v(" "),a("p",[t._v("::: {.function}\na.determinant()")]),t._v(" "),a("p",[t._v("parameter a")]),t._v(" "),a("p",[t._v(": (ti.Matrix) the matrix")]),t._v(" "),a("p",[t._v("return")]),t._v(" "),a("p",[t._v(": (scalar) the determinant of matrix "),a("code",[t._v("a")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("The matrix size of matrix must be 1x1, 2x2, 3x3 or 4x4 for now.")]),t._v(" "),a("p",[t._v("This function only works in Taichi-scope for now.")])]),t._v(" "),a("p",[t._v(":::")]),t._v(" "),a("p",[t._v("::: {.function}\na.inverse()")]),t._v(" "),a("p",[t._v("parameter a")]),t._v(" "),a("p",[t._v(": (ti.Matrix) the matrix")]),t._v(" "),a("p",[t._v("return")]),t._v(" "),a("p",[t._v(": (ti.Matrix) the inverse of matrix "),a("code",[t._v("a")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),a("p",[t._v("The matrix size of matrix must be 1x1, 2x2, 3x3 or 4x4 for now.")]),t._v(" "),a("p",[t._v("This function only works in Taichi-scope for now.")])]),t._v(" "),a("p",[t._v(":::")])])}),[],!1,null,null,null);e.default=v.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{503:function(t,a,s){"use strict";s.r(a);var n=s(20),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"interacting-with-external-arrays"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interacting-with-external-arrays"}},[t._v("#")]),t._v(" Interacting with external arrays")]),t._v(" "),s("p",[t._v("Although Taichi fields are mainly used in Taichi-scope, in some cases\nefficiently manipulating Taichi field data in Python-scope could also be\nhelpful.")]),t._v(" "),s("p",[t._v("We provide various interfaces to copy the data between Taichi fields and\nexternal arrays. The most typical case maybe copying between Tachi\nfields and Numpy arrays. Let's take a look at two examples below.")]),t._v(" "),s("p",[s("strong",[t._v("Export data in Taichi fields to a NumPy array")]),t._v(" via "),s("code",[t._v("to_numpy()")]),t._v(". This\nallows us to export computation results to other Python packages that\nsupport NumPy, e.g. "),s("code",[t._v("matplotlib")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kernel")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("my_kernel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\nx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmy_kernel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nx_np "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_numpy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x_np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# np.array([0, 2, 4, 6])")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Import data from NumPy array to Taichi fields")]),t._v(" via "),s("code",[t._v("from_numpy()")]),t._v(".\nThis allows people to initialize Taichi fields via NumPy arrays. E.g.,")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("f32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nx_np "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from_numpy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x_np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 7")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 5")]),t._v("\n")])])]),s("h2",{attrs:{id:"api-reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-reference"}},[t._v("#")]),t._v(" API reference")]),t._v(" "),s("p",[t._v("We provide interfaces to copy data between Taichi field and "),s("strong",[t._v("external\narrays")]),t._v(". External arrays refers to NumPy arrays or PyTorch tensors.")]),t._v(" "),s("p",[t._v("We suggest common users to start with NumPy arrays.")]),t._v(" "),s("p",[t._v("For details, check "),s("RouterLink",{attrs:{to:"/zh/versioned_docs/develop/documentation/api/field.html"}},[t._v("Field in API references")])],1),t._v(" "),s("h2",{attrs:{id:"external-array-shapes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#external-array-shapes"}},[t._v("#")]),t._v(" External array shapes")]),t._v(" "),s("p",[t._v("Shapes of Taichi fields (see "),s("RouterLink",{attrs:{to:"/zh/versioned_docs/develop/documentation/api/scalar_field.html"}},[t._v("Scalar fields")]),t._v(") and those of corresponding NumPy arrays are closely\nconnected via the following rules:")],1),t._v(" "),s("ul",[s("li",[t._v("For scalar fields, "),s("strong",[t._v("the shape of NumPy array is exactly the same as\nthe Taichi field")]),t._v(":")])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("field "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shape"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("233")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("666")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfield"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (233, 666)")]),t._v("\n\narray "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" field"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_numpy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\narray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (233, 666)")]),t._v("\n\nfield"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from_numpy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# the input array must be of shape (233, 666)")]),t._v("\n")])])]),s("ul",[s("li",[t._v("For vector fields, if the vector is "),s("code",[t._v("n")]),t._v("-D, then "),s("strong",[t._v("the shape of NumPy\narray should be")]),t._v(" "),s("code",[t._v("(*field_shape, vector_n)")]),t._v(":")])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("field "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Vector"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shape"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("233")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("666")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfield"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (233, 666)")]),t._v("\nfield"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3")]),t._v("\n\narray "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" field"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_numpy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\narray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (233, 666, 3)")]),t._v("\n\nfield"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from_numpy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# the input array must be of shape (233, 666, 3)")]),t._v("\n")])])]),s("ul",[s("li",[t._v("For matrix fields, if the matrix is "),s("code",[t._v("n*m")]),t._v(", then "),s("strong",[t._v("the shape of NumPy\narray should be")]),t._v(" "),s("code",[t._v("(*field_shape, matrix_n, matrix_m)")]),t._v(":")])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("field "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Matrix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shape"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("233")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("666")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfield"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (233, 666)")]),t._v("\nfield"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3")]),t._v("\nfield"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("m      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4")]),t._v("\n\narray "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" field"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to_numpy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\narray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (233, 666, 3, 4)")]),t._v("\n\nfield"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from_numpy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# the input array must be of shape (233, 666, 3, 4)")]),t._v("\n")])])]),s("h2",{attrs:{id:"using-external-arrays-as-taichi-kernel-arguments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-external-arrays-as-taichi-kernel-arguments"}},[t._v("#")]),t._v(" Using external arrays as Taichi kernel arguments")]),t._v(" "),s("p",[t._v("Use the type hint "),s("code",[t._v("ti.ext_arr()")]),t._v(" for passing external arrays as kernel\narguments. For example:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" taichi "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" ti\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" numpy "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" np\n\nti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("init"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\nm "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\n\nval "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("field"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shape"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kernel")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_numpy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ext_arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" j\n\na "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("empty"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("shape"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dtype"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("int32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" j\n\ntest_numpy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" j\n")])])]),s("div",{staticClass:"custom-block note"},[s("p",{staticClass:"custom-block-title"},[t._v("注解")]),t._v(" "),s("p",[t._v("Struct-for's are not supported on external arrays.")])])])}),[],!1,null,null,null);a.default=e.exports}}]);
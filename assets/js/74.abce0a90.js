(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{481:function(t,e,a){"use strict";a.r(e);var s=a(20),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),a("h2",{attrs:{id:"q-installing-taichi-with-pip-complains-package-not-found"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-installing-taichi-with-pip-complains-package-not-found"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Q:")]),t._v(" Installing Taichi with "),a("code",[t._v("pip")]),t._v(", complains "),a("code",[t._v("package not found")]),t._v(".")]),t._v(" "),a("p",[a("strong",[t._v("A:")]),t._v(" Is your Python version >= 3.6, and 64-bit? See\n"),a("RouterLink",{attrs:{to:"/zh/documentation/overview/install.html#troubleshooting"}},[t._v("Troubleshooting")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"q-do-we-have-something-like-ti-pi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-do-we-have-something-like-ti-pi"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Q:")]),t._v(" Do we have something like "),a("code",[t._v("ti.pi")]),t._v("?")]),t._v(" "),a("p",[a("strong",[t._v("A:")]),t._v(" No, but you may use "),a("code",[t._v("math.pi")]),t._v(" or "),a("code",[t._v("numpy.pi")]),t._v(" instead. Taichi is\nable to bake in these constants during JIT, so your kernels incur no\nruntime cost.")]),t._v(" "),a("h2",{attrs:{id:"q-how-do-i-force-an-outermost-loop-to-be-serial-i-e-not-parallelized"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-how-do-i-force-an-outermost-loop-to-be-serial-i-e-not-parallelized"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Q:")]),t._v(" How do I "),a("strong",[t._v("force")]),t._v(" an outermost loop to be serial, i.e. "),a("strong",[t._v("not parallelized")]),t._v("?")]),t._v(" "),a("p",[a("strong",[t._v("A:")]),t._v(" Try this trick:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" _ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# I'm the outer-most loop!")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This loop will not be parallelized")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),a("h2",{attrs:{id:"q-what-s-the-most-convenient-way-to-load-images-or-textures-into-taichi-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-what-s-the-most-convenient-way-to-load-images-or-textures-into-taichi-fields"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Q:")]),t._v(" What's the most convenient way to load images or textures into Taichi fields?")]),t._v(" "),a("p",[a("strong",[t._v("A:")]),t._v(" Simply use "),a("code",[t._v("field.from_numpy(ti.imread('filename.png'))")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"q-can-taichi-co-operate-with-other-python-packages-like-matplotlib"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-can-taichi-co-operate-with-other-python-packages-like-matplotlib"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Q:")]),t._v(" Can Taichi co-operate with "),a("strong",[t._v("other Python packages")]),t._v(" like "),a("code",[t._v("matplotlib")]),t._v("?")]),t._v(" "),a("p",[a("strong",[t._v("A:")]),t._v(" Yes, as long as that "),a("em",[t._v("package")]),t._v(" provides an interface with\n"),a("code",[t._v("numpy")]),t._v(", see "),a("RouterLink",{attrs:{to:"/zh/documentation/overview/hello.html#interacting-with-other-python-packages"}},[t._v("Interacting with other Python packages")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"q-shall-we-add-some-handy-functions-like-ti-smoothstep-or-ti-vec3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-shall-we-add-some-handy-functions-like-ti-smoothstep-or-ti-vec3"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Q:")]),t._v(" Shall we add some handy functions like "),a("code",[t._v("ti.smoothstep")]),t._v(" or "),a("code",[t._v("ti.vec3")]),t._v("?")]),t._v(" "),a("p",[a("strong",[t._v("A:")]),t._v(" No, but we provide them in an extension library "),a("a",{attrs:{href:"https://taichi-glsl.readthedocs.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Taichi\nGLSL"),a("OutboundLink")],1),t._v(" , install it using:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("python -m pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" taichi_glsl\n")])])]),a("h2",{attrs:{id:"q-how-can-i-render-3d-results-without-writing-a-ray-tracer-myself"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-how-can-i-render-3d-results-without-writing-a-ray-tracer-myself"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Q:")]),t._v(" How can I "),a("strong",[t._v("render 3D results")]),t._v(" without writing a ray tracer myself?")]),t._v(" "),a("p",[a("strong",[t._v("A:")]),t._v(" You may export it with "),a("RouterLink",{attrs:{to:"/zh/documentation/misc/export_results.html#export-ply-files"}},[t._v("Export PLY files")]),t._v(" so that you could view it in Houdini or Blender.")],1),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("Or make use the extension library "),a("a",{attrs:{href:"https://github.com/taichi-dev/taichi_glsl",target:"_blank",rel:"noopener noreferrer"}},[t._v("Taichi THREE"),a("OutboundLink")],1),t._v(" to render images and update to GUI in real-time.")])]),t._v(" "),a("h2",{attrs:{id:"q-how-do-i-declare-a-field-with-dynamic-length"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-how-do-i-declare-a-field-with-dynamic-length"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Q:")]),t._v(" How do I declare a field with "),a("strong",[t._v("dynamic length")]),t._v("?")]),t._v(" "),a("p",[a("strong",[t._v("A:")]),t._v(" What you want may be the "),a("code",[t._v("dynamic")]),t._v(" SNode, a kind of sparse field, see "),a("RouterLink",{attrs:{to:"/zh/documentation/api/snode.html#working-with-dynamic-snodes"}},[t._v("Working with dynamic SNodes")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("Or simply allocate a dense field large enough, and another 0-D field\n"),a("code",[t._v("field_len[None]")]),t._v(" for length record. But in fact, the "),a("code",[t._v("dynamic")]),t._v("\nSNode could be slower than the latter solution, due to the cost of\nmaintaining the sparsity information.")])]),t._v(" "),a("h2",{attrs:{id:"q-can-a-user-iterate-over-irregular-topologies-e-g-graphs-or-tetrahedral-meshes-instead-of-regular-grids"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-can-a-user-iterate-over-irregular-topologies-e-g-graphs-or-tetrahedral-meshes-instead-of-regular-grids"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Q:")]),t._v(" Can a user iterate over irregular topologies (e.g., graphs or tetrahedral meshes) instead of regular grids?")]),t._v(" "),a("p",[a("strong",[t._v("A:")]),t._v(" These structures have to be represented using 1D arrays in Taichi. You can still iterate over them using "),a("code",[t._v("for i in x")]),t._v(" or "),a("code",[t._v("for i in range(n)")]),t._v(".")]),t._v(" "),a("p",[t._v("However, at compile time, there's little the Taichi compiler can do for you to optimize it. You can still tweak the data layout to get different runtime cache behaviors and performance numbers.")])])}),[],!1,null,null,null);e.default=o.exports}}]);
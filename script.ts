const MathJax = require("mathjax");

console.log("Started")

console.log("Calling mathjax")

generateFormula("... and, eventually, $$x^2$$.").then((result) => {
    console.log("Result: ", result)
    console.log("Done.")
})


export async function generateFormula(formula: string): Promise<void> {

    const mathJax: any = await MathJax.init({
        loader: { load: ["input/tex", "output/svg"] },
    });

    const svg = mathJax.tex2svg(formula, { display: true });
    const html = mathJax.startup.adaptor.outerHTML(svg);

    return html;
}

<template>
    <article class="page container">
        <slot name="header"></slot>

        <p class="lead">
            Sweet roll jelly-o cake danish icing <em>liquorice</em> candy canes chocolate cake sweet roll. Icing
            topping gingerbread macaroon.
        </p>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam felis dolor, fermentum tristique turpis a,
            volutpat facilisis urna. Fusce vel libero vel elit ullamcorper consectetur et ac nunc. Cras condimentum
            ipsum sed felis maximus convallis. Nullam posuere consectetur interdum. Duis aliquet cursus rutrum. Nam
            aliquam
            porta aliquam. Morbi egestas volutpat risus at viverra. Fusce porta vestibulum consequat. Vestibulum sit
            amet mollis mi.
        </p>

        <p>
            Donec efficitur diam eget pulvinar suscipit. Proin accumsan ante et efficitur facilisis. Duis ut nulla
            tincidunt, scelerisque augue eu, lobortis ex. Fusce facilisis, felis vel condimentum consectetur, urna
            sapien facilisis dui, eu lobortis purus turpis ullamcorper libero. Pellentesque rhoncus volutpat erat,
            tempus
            elementum elit ultrices eget. Pellentesque nunc tellus, laoreet sit amet urna sed, iaculis vulputate mi.
            Praesent accumsan, est vitae auctor tempor, ex ligula efficitur justo, aliquet bibendum nunc eros et
            sapien.
        </p>

        <pre><code>function codestyling() {
    var numbers = [];
    for (i = 1; i &lt; lines; i++) {
        numbers += '&lt;span class=&quot;line&quot;&gt;' + i + '&lt;/span&gt;';
    }
}
codestyling();</code></pre>

        <h3>This is a subheader</h3>
        <p>
            Cras in felis non diam tincidunt mollis. Mauris dapibus placerat consequat. Ut fringilla, velit sit amet
            tempor blandit, magna enim bibendum sem, id malesuada tortor quam vitae quam. Duis ut ipsum malesuada,
            accumsan nulla nec, semper augue. Morbi et tempor elit, non fermentum ante. Quisque est leo, ullamcorper
            vestibulum ex sit amet, iaculis tempor erat. Aenean sed ante quis dui ultrices porttitor et et diam. Donec
            eget mollis ipsum. Sed pellentesque malesuada justo, suscipit blandit enim. Vestibulum commodo turpis non
            ultrices elementum. Suspendisse pretium leo non convallis varius.
        </p>

        <p>
            Gingerbread <em>ice cream</em> soufflé brownie <s>jelly</s> powder gummies icing gingerbread. <em>Sesame
                                                                                                              snaps
            <strong>jelly-o</strong> tootsie</em> roll soufflé sweet pudding jelly-o. <strong>Candy canes</strong>
            caramels dessert pastry halvah <a href="#">donut</a> ice cream. Halvah
            <mark>marzipan cake</mark>
            marzipan wafer <strong>sesame snaps</strong> pudding pastry lollipop. Tootsie roll pastry <em>ice cream</em>
            <a href="#">donut</a> icing tootsie roll gummi bears gummies brownie. Sweet roll jelly-o <s>cake</s> danish
            icing liquorice candy canes sweet roll <code>chocolate cake</code> icing topping gingerbread macaroon.
        </p>

        <blockquote>
            <cite>Benjamin dudok - 2019</cite>
            <p>Topping gummies apple pie gummi bears candy canes sesame snaps chocolate. Liquorice bonbon bear claw
               lollipop pudding brownie dragée. Cupcake wafer sesame snaps cupcake apple pie sesame snaps jelly beans.
               Powder candy soufflé oat cake tart cotton candy tart.</p>
            <p>Soufflé jelly-o cake icing jelly jelly beans candy tiramisu fruitcake. Lemon drops apple pie bonbon.</p>
        </blockquote>

        <p>
            Topping gummies apple pie gummi bears candy canes sesame snaps chocolate. Liquorice bonbon bear claw lollipop
           pudding brownie dragée. Cupcake wafer sesame snaps cupcake apple pie sesame snaps jelly beans. Powder candy
           soufflé oat cake tart cotton candy tart. Soufflé jelly-o cake icing jelly jelly beans candy tiramisu
           fruitcake. Lemon drops apple pie bonbon.
        </p>
        <h4>Ordered List</h4>
        <ol>
            <li>Cupcake</li>
            <li>Apple pie</li>
            <li>Sesame snaps</li>
            <li>Jelly beans</li>
        </ol>
        <h4>Unordered List</h4>
        <ul>
            <li>Powder candy soufflé oat cake tart cotton candy tart soufflé jelly-o cake icing jelly jelly beans candy
                tiramisu fruitcake lemon drops apple pie bonbon
            </li>
            <li>gummi bears candy canes</li>
            <li>Candy canes caramels dessert pastry halvah donut ice cream</li>
        </ul>
        <h4>Definition List</h4>
        <dl>
            <dt>1995</dt>
            <dd>Lollipop</dd>
            <dt>2002</dt>
            <dd>Gingerbread</dd>
            <dt>2014</dt>
            <dd>Pudding</dd>
        </dl>

        <slot name="footer"></slot>
    </article>
</template>

<script lang="ts" src="./page-content.ts"></script>

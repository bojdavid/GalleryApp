<h1>Project Title</h1>
<p>This project is deployed on Vercel. You can access it here: <a href="#">Project Link</a></p>
<h2>Running the App Locally</h2>
<ol>
        <li>
            <strong>Clone the Repository:</strong>
            <pre><code>git clone &lt;repository-url&gt;
            cd &lt;repository-directory&gt;</code></pre>
        </li>
        <li>
            <strong>Install Dependencies:</strong>
            <p>Navigate to the root directory and run:</p>
            <pre><code>npm install</code></pre>
            <p>During installation, you might receive certain prompts:</p>
            <ul>
                <li><strong>Select a project template:</strong> Choose <em>skeleton</em>: A basic starter template with minimal configuration.</li>
                <li><strong>Add TypeScript? (y/n):</strong> Select <em>no</em>.</li>
                <li><strong>Add ESLint for code linting? (y/n):</strong> Select <em>no</em>.</li>
            </ul>
        </li>
        <li>
            <strong>Start the Development Server:</strong>
            <p>Once you've installed the dependencies, start the development server:</p>
            <pre><code>npm run dev

#or start the server and open the app in a new browser tab
npm run dev -- --open</code></pre>
        </li>
        <li>
            <strong>Set Up API Key:</strong>
            <p>To access the Pexels API:</p>
            <ul>
                <li>Go to <a href="https://www.pexels.com/api/">Pexels API</a> and obtain an API key.</li>
                <li>Create a <code>.env</code> file in the root directory and add the API key:</li>
            </ul>
            <pre><code>PUBLIC_KEY="your-api-key"</code></pre>
        </li>
    </ol>

<h2>API Information</h2>

<p>The images from the recommended API <a href="https://jsonplaceholder.typicode.com/photos">JSON Placeholder Photos</a> were not displaying. Therefore, this project uses the <a href="https://www.pexels.com">Pexels API</a>.</p>

<h2>Features</h2>

<ul>
        <li>Implemented a feature for loading more images when a user reaches the end of the page using the Intersection Observer.</li>
</ul>

<h2>Known Issues</h2>

<ol>
        <li>
            <strong>Image Display in Masonry Layout: on safari-works on chrome</strong>
            <p>If there are only two images—one with a height of 40 and another about double that height—both images are displayed side by side in the masonry layout. However, in the browser, the larger image doesn't show. Adding more images, particularly one under the smaller image to make the sizes similar, causes the larger image to display. You can check this by adding two images to favorites: a small one and a large one. The problem seems to be related to the <code>position: relative;</code> setting of the image container. A solution has not been identified at this moment.</p>
        </li>
    </ol>
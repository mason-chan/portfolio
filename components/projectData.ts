
export interface items {
    id: string;
    switch: string;
    category: string;
    title: string;
    image: string;
    description: string;
    keyboard: string;
    tools: string;
    live: string;
    github: string;
}

export const allProjects = [
    {
        id: 'a',
        switch: '/alpaca.png',
        category: '01 - thockit',
        title: 'thockit',
        image: '/thockit.png',
        description: 'A Reddit clone themed around keyboards',
        tools: 'NextJS | React | TypeScript  TailwindCSS | Supabase | Stepzen',
        keyboard: 'Hephaestus Works Nasu',
        live: 'https://thockit.vercel.app/',
        github: 'https://github.com/mason-chan/thockit'
    },
    {
        id: 'b',
        switch: '/strawberry.png',
        category: '02 - minitype',
        title: 'minitype',
        image: '/minitype.png',
        description: 'A minimalistic typing test website with custom color themes',
        tools: 'React | TypeScript | TailwindCSS',
        keyboard: 'Monokei X TGR Tomo',
        live: 'https://mason-chan.github.io/minitype/',
        github: 'https://github.com/mason-chan/minitype'
    },
    {
        id: 'c',
        switch: '/marshmallow.png',
        category: '03 - wikeeb',
        title: 'wikeeb',
        image: '/wikeeb.png',
        description: 'A wiki style page about all things custom mechanical keyboards',
        tools: 'React | JavaScript | TailwindCSS',
        keyboard: 'Graystudio Space80',
        live: 'https://mason-chan.github.io/wikeeb/',
        github: 'https://github.com/mason-chan/wikeeb'
    }
]


const [thockit, minitype, wikeeb] = allProjects;
export const list = [thockit, minitype, wikeeb];

export function getNextProject(
    projects: items[]
): items | undefined {
    const existing = new Set(projects);
    return allProjects.find((items) => !existing.has(items));
}
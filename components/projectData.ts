
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
        category: 'Build - 01',
        title: 'thockit',
        image: '/thockit.png',
        description: 'A Reddit clone themed around keyboards',
        tools: 'NextJS | React | TypeScript  TailwindCSS | Supabase | Stepzen',
        keyboard: 'Hephaestus Works Nasu',
        live: 'https://thockit.vercel.app/',
        github: 'https://github.com/mctekno/thockit'
    },
    {
        id: 'b',
        switch: '/strawberry.png',
        category: 'Build - 02',
        title: 'minitype',
        image: '/minitype.png',
        description: 'A minimalistic typing test website with custom color themes',
        tools: 'React | TypeScript | TailwindCSS',
        keyboard: 'Monokei X TGR Tomo',
        live: 'https://mctekno.github.io/minitype/',
        github: 'https://github.com/mctekno/minitype'
    },
    {
        id: 'c',
        switch: '/marshmallow.png',
        category: 'Build - 03',
        title: 'wikeeb',
        image: '/wikeeb.png',
        description: 'A wiki style page about all things custom mechanical keyboards',
        tools: 'React | JavaScript | TailwindCSS',
        keyboard: 'Graystudio Space80',
        live: 'https://mctekno.github.io/wikeeb/',
        github: 'https://github.com/mctekno/wikeeb'
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
"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Portfolio;
const badge_1 = require("@/components/ui/badge");
const card_1 = require("@/components/ui/card");
const lucide_react_1 = require("lucide-react");
const link_1 = __importDefault(require("next/link"));
function Portfolio() {
    return className = "container mx-auto px-4 py-12" >
        className;
    "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto" >
        { /* Hero Section - Spans 2 columns */}
        < card_1.Card;
    className = "p-8 md:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 text-white" >
        className;
    "flex flex-col md:flex-row items-start gap-6" >
        src;
    "/배동훈 Donghoon Bae Alf Profile bk removed.png";
    alt = "Dr. Alf Bae";
    width = { 200:  };
    height = { 200:  };
    className = "rounded-2xl"
        /  >
        className;
    "space-y-4" >
        className;
    "text-4xl font-bold" > Dr.Alf;
    Bae < /h1>
        < p;
    className = "text-gray-300 text-lg" > UI / UX;
    Design;
    Doctor;
    with (+20)
        years;
    of;
    digital;
    product;
    experience < /p>
        < div;
    className = "flex gap-2" >
        variant;
    "secondary";
    className = "hover:bg-white/20" >
        UI;
    Design
        < /Badge>
        < badge_1.Badge;
    variant = "secondary";
    className = "hover:bg-white/20" >
        UX;
    Research
        < /Badge>
        < badge_1.Badge;
    variant = "secondary";
    className = "hover:bg-white/20" >
        Product;
    Design
        < /Badge>
        < /div>
        < /div>
        < /div>
        < /Card>;
    { /* Contact Card */ }
    className;
    "p-6 bg-purple-50 hover:bg-purple-100 transition-colors" >
        className;
    "space-y-4" >
        className;
    "text-xl font-semibold flex items-center gap-2" >
        className;
    "w-5 h-5" /  >
        Contact
        < /h2>
        < div;
    className = "flex flex-col gap-3" >
        href;
    "#";
    className = "flex items-center gap-2 hover:text-purple-600 transition-colors" >
        className;
    "w-4 h-4" /  >
        LinkedIn
        < lucide_react_1.ArrowUpRight;
    className = "w-4 h-4" /  >
        /Link>
        < link_1.default;
    href = "#";
    className = "flex items-center gap-2 hover:text-purple-600 transition-colors" >
        className;
    "w-4 h-4" /  >
        lucide_react_1.Github
        < lucide_react_1.ArrowUpRight;
    className = "w-4 h-4" /  >
        /Link>
        < link_1.default;
    href = "#";
    className = "flex items-center gap-2 hover:text-purple-600 transition-colors" >
        className;
    "w-4 h-4" /  >
        Email
        < lucide_react_1.ArrowUpRight;
    className = "w-4 h-4" /  >
        /Link>
        < /div>
        < /div>
        < /Card>;
    { /* Experience Highlight */ }
    className;
    "p-6 md:col-span-2 bg-blue-50 hover:bg-blue-100 transition-colors" >
        className;
    "space-y-4" >
        className;
    "text-xl font-semibold flex items-center gap-2" >
        className;
    "w-5 h-5" /  >
        Experience;
    Highlights
        < /h2>
        < div;
    className = "grid grid-cols-1 md:grid-cols-2 gap-4" >
        className;
    "space-y-2" >
        className;
    "font-medium" > Senior;
    UX;
    Designer < /div>
        < div;
    className = "text-sm text-gray-600" > Tech;
    Giant;
    Corp;
    2018 - Present < /div>
        < div;
    className = "text-sm" > Led;
    design;
    system;
    implementation;
    for (enterprise; products < /div>
        < /div>
        < div; className = "space-y-2" >
        className)
         = "font-medium" > Design;
    Director < /div>
        < div;
    className = "text-sm text-gray-600" > Design;
    Studio;
    Inc;
    2010 - 2018 < /div>
        < div;
    className = "text-sm" > Managed;
    team;
    of;
    12;
    designers;
    across;
    let global;
    (function (global) {
    })(global || (global = {}));
    projects < /div>
        < /div>
        < /div>
        < /div>
        < /Card>;
    { /* Skills */ }
    className;
    "p-6 bg-green-50 hover:bg-green-100 transition-colors" >
        className;
    "space-y-4" >
        className;
    "text-xl font-semibold flex items-center gap-2" >
        className;
    "w-5 h-5" /  >
        Skills
        < /h2>
        < div;
    className = "flex flex-wrap gap-2" >
        Figma < /Badge>
        < badge_1.Badge > Sketch < /Badge>
        < badge_1.Badge > Adobe;
    XD < /Badge>
        < badge_1.Badge > Prototyping < /Badge>
        < badge_1.Badge > User;
    Research < /Badge>
        < /div>
        < /div>
        < /Card>;
    { /* Publications */ }
    className;
    "p-6 bg-yellow-50 hover:bg-yellow-100 transition-colors" >
        className;
    "space-y-4" >
        className;
    "text-xl font-semibold flex items-center gap-2" >
        className;
    "w-5 h-5" /  >
        Publications
        < /h2>
        < div;
    className = "space-y-3" >
        className;
    "space-y-1" >
        className;
    "font-medium" > Design;
    Systems;
    at;
    Scale < /div>
        < div;
    className = "text-sm text-gray-600" > Published in UX;
    Magazine, 2023 < /div>
        < /div>
        < div;
    className = "space-y-1" >
        className;
    "font-medium" > The;
    Future;
    of;
    Mobile;
    UX < /div>
        < div;
    className = "text-sm text-gray-600" > International;
    Design;
    Journal, 2022 < /div>
        < /div>
        < /div>
        < /div>
        < /Card>;
    { /* Awards */ }
    className;
    "p-6 bg-red-50 hover:bg-red-100 transition-colors" >
        className;
    "space-y-4" >
        className;
    "text-xl font-semibold flex items-center gap-2" >
        className;
    "w-5 h-5" /  >
        Awards
        < /h2>
        < div;
    className = "space-y-3" >
        className;
    "flex items-center gap-2" >
        className;
    "w-4 h-4 text-yellow-500" /  >
        Best;
    Digital;
    Experience;
    Award;
    2023 < /div>
        < /div>
        < div;
    className = "flex items-center gap-2" >
        className;
    "w-4 h-4 text-yellow-500" /  >
        UX;
    Design;
    Excellence;
    2022 < /div>
        < /div>
        < /div>
        < /div>
        < /Card>;
    { /* Featured Work */ }
    className;
    "p-6 md:col-span-3 bg-gradient-to-br from-indigo-50 to-purple-50 hover:bg-indigo-100 transition-colors" >
        className;
    "space-y-4" >
        className;
    "text-xl font-semibold flex items-center gap-2" >
        className;
    "w-5 h-5" /  >
        Featured;
    Work
        < /h2>
        < div;
    className = "grid grid-cols-1 md:grid-cols-3 gap-6" >
        className;
    "space-y-2" >
        className;
    "aspect-video bg-white rounded-lg" /  >
        className;
    "font-medium" > E - commerce;
    Redesign < /div>
        < div;
    className = "text-sm text-gray-600" > Increased;
    conversion;
    by;
    45 % /div>
        < /div>
        < div;
    className = "space-y-2" >
        className;
    "aspect-video bg-white rounded-lg" /  >
        className;
    "font-medium" > Banking;
    App < /div>
        < div;
    className = "text-sm text-gray-600" > 4.8;
    lucide_react_1.Star;
    Rating;
    on;
    App;
    Store < /div>
        < /div>
        < div;
    className = "space-y-2" >
        className;
    "aspect-video bg-white rounded-lg" /  >
        className;
    "font-medium" > Healthcare;
    Platform < /div>
        < div;
    className = "text-sm text-gray-600" > Serving;
    1;
    M + patients < /div>
        < /div>
        < /div>
        < /div>
        < /Card>
        < /div>
        < /main>;
}

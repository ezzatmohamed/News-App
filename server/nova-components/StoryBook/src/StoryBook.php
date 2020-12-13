<?php

namespace Newsapp\StoryBook;

use Laravel\Nova\ResourceTool;

class StoryBook extends ResourceTool
{
    /**
     * Get the displayable name of the resource tool.
     *
     * @return string
     */
    public function name()
    {
        return 'Story Book';
    }

    /**
     * Get the component name for the resource tool.
     *
     * @return string
     */
    public function component()
    {
        return 'story-book';
    }
}

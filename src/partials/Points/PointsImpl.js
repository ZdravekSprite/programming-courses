import React from "react"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"

import { useQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"
import { Button } from "@material-ui/core"
import OverallPoints from "./OverallPoints"

const PROGRESS = gql`
  {
    currentUser {
      email
      progress(course_id: "59314cb4-a9ca-43c9-b9a7-58c19325b44c") {
        course {
          id
          name
        }
        user_course_progress {
          id
          progress
        }
        user_course_service_progresses {
          id
          progress
          service {
            id
            name
          }
        }
      }
    }
  }
`

const Points = props => {
  const { data, loading, error, refetch } = useQuery(PROGRESS)

  if (loading) {
    return <>Loading...</>
  }

  if (error) {
    return <>Error while fetching progress: {error}</>
  }

  if (!data || !data.currentUser) {
    return (
      <>
        <Button
          onClick={() => {
            refetch()
          }}
        >
          Refresh
        </Button>
        <p>Please log in to see your points.</p>
      </>
    )
  }

  const courseName = data.currentUser.progress.course.name
  return (
    <>
      <OverallPoints
        refetch={refetch}
        courseName={courseName}
        progress={data.currentUser.progress}
      />
    </>
  )
}

export default withSimpleErrorBoundary(Points)
